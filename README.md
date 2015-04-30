# Haushaltsapp

App für Haushaltsplanung. Erstellt mit Meteor (www.meteor.com).
 
## Roadmap

### Version 0.1

Einkaufsliste
 - shared between all users in household
 - bearbeiten, löschen, abhaacken
 - sortieren nach 1. priorität abgehaackt, 2. chronologisch
 - Button "einkauf abgeschlossen" -> weg von liste


### Version 0.2
 - Einkauf history (abgeschlossene Einkäufe)
 - Vorrat


## Datenbank 

 - Users
 	 - UUID 
 	 - Email
 	 - Username 
 	 - Passwort

 - Haushalt
 	 - UUID
 	 - Name 
 	 - Mitglieder (Array von user UUID's)
 	 - Postiliste (Array von Produkt)
 	 	 - Name 
 	 	 - Menge 
 	 	 - gekauft (true/false)
 	 	 - addedAt (Zeitpunkt)
 	 - Ausgaben

 

## Contributors

Luc, Schmidi, ...

## License

GPL