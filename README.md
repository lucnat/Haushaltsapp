# Haushaltsapp

App für Haushaltsplanung. Erstellt mit Meteor (www.meteor.com).
 
## Funktionalitäten

1. Haushalt gründen - wie? Soll es Chef geben? Ich fänds geil, wenn es keinen Chef gibt. Z.b. könnte man private UUID von Haushalt benützen, um Haushalte zu finden (jeder der UUID hat, kann beitreten). 
2. Ausgaben aufteilen
3. Postilischte. 
4. Liste von Grundnahrungsmittel, die im Haushalt benötigt werden. Ist eins aufgebraucht, so kann das im App markiert werden. Das Produkt landet dann direkt in der Postilischte. 
5. Gemeinsamer Kalender (Wäsche, Abfall, Spengler etc...)
6. Ämtliplan (ev. Möglichkeit, automatisch Ämtli zu "rotieren")


## Datenbank 

 - Users
 	 - UUID (String)
 	 - Email
 	 - Username (optional?)

 - Haushalt
 	 - UUID
 	 - Name (String)
 	 - Mitglieder (Array von user UUID's)
 	 - Postiliste (Array von Strings)
 	 - Ausgaben

## Contributors

Luc, Schmidi, ...

## License

(TODO)