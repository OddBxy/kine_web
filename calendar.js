
const { google } = require('googleapis')
const { OAuth2 } = google.auth

// pour utiliser le bon projet google 
const oAuth2Client = new OAuth2(
    '683580459795-ql5qpm98pvhti2m3mo42t8q0df17n94l.apps.googleusercontent.com',
    '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'
)

// utilise l'api google calendar sur le compte de la personne possedant ce refresh token
oAuth2Client.setCredentials({
  refresh_token: '1//04rQPGXjMANLQCgYIARAAGAQSNwF-L9IrAR6FNfWSJgRKG-kOkXlCTVMXW-SCLmBgzhVkoj9EHmcvNF4SUVEpg_C-ofCU_pxYo7Q',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })


exports.setEvent = async function(req, res) {
    let rdv = req.body

    let new_event = {
        summary: rdv.summary,
        location: rdv.location,
        description: rdv.description,
        colorId: 1,
        start: {
            dateTime: rdv.start.dateTime,
            timeZone: 'Europe/Paris',
        },
        end: {
            dateTime: rdv.end.dateTime,
            timeZone: 'Europe/Paris',
        },
    }

    try{
        let horaire = {
            resource: {
              timeMin: new_event.start.dateTime,
              timeMax: new_event.end.dateTime,
              timeZone: 'Europe/Paris',
              items: [{ id: 'primary' }],
            },
        }
        
        let reponse = await calendar.freebusy.query(horaire) //renvoie des information sur la requetre sous forme de json contenant un tableau avec des info sur l'horaire
        reponse = reponse.data.calendars.primary.busy //tableau vide si horaire est libre, tableau rempli si l'horaire n'est pas libre

        if(reponse.length === 0){
            calendar.events.insert({calendarId: 'primary', resource: new_event});
            res.status(200).json({message : "evennement ajouté !"})
        }
        else{
            let old_reponse;
            let i =0
            while (reponse.length != 0) {
                old_reponse = reponse[reponse.length - 1]
                horaire.resource.timeMin = new Date(old_reponse.end)

                let new_timemax = new Date(horaire.resource.timeMin)
                new_timemax.setMinutes(horaire.resource.timeMin.getMinutes() + 60);
                horaire.resource.timeMax = new_timemax;
                
                reponse = await calendar.freebusy.query(horaire) //renvoie des information sur la requetre sous forme de json contenant un tableau avec des info sur l'horaire
                reponse = reponse.data.calendars.primary.busy //tableau vide si horaire est libre, tableau rempli si l'horaire n'est pas libre

            }

            res.status(200).json(old_reponse.end)
        }

        
    }
    catch(err){
        console.log(err);
        res.status(500).json({ message: err })
    }
    
}