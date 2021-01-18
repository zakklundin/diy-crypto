# Do-it-yourself crypto

Mål med övningen:
- Bekanta sig med kryptering
- Repetera olika programmeringskoncept
- I mån av tid: få viss förståelse för hur man organiserar sin kod som programmerare

## Förberedelser

- Ta reda på vad Caesar-chiffer är för något och hur det fungerar. Kolla [detta klipp](https://www.youtube.com/watch?v=sMOZf4GN3oc) från Khan Academy. PS. Khan Academy har en rolig [introkurs till kryptografi](https://www.khanacademy.org/computing/computer-science/cryptography/) för den som vill fördjupa sig, jag rekommenderar den varmt!

## Uppgifter

Förslag: begränsa dig till engelska meddelanden, ALL CAPS och utan mellanslag.

1. Skapa en fil `main.js`. I den, implementera Caesar-chiffer med shift 1 med hjälp av for-loopar.
`ILOVEYOULISA` ska bli `JMPWFZPVMJTB`.

2. Refaktorisera din kod (googla på vad *refaktorisera* betyder) genom att flytta in looparna i en funktion `encrypt(message, shift)`. Definiera även en motsvarande avkrypteringsfunktion `decrypt(encryptedMessage, shift)`. Testa olika meddelanden och bekräfta att koden fortfarande fungerar!

3. Programmerare vill ofta modularisera sin kod, dvs. man vill bryta ut funktionalitet i olika mindre filer. Det ger bättre organisation och ökar möjligheten att återanvända koden i olika sammanhang.
   1. Skapa en ny fil `diycrypto.js`. Lägg funktionerna där.
   2. Vi ska nu göra det möjligt att importera och exportera funktionerna. Skapa en `package.json` fil genom att i terminalen köra `npm init` (OBS: Se till att du står i samma mapp)
   3. Gå in i filen `package.json` och lägg till ett fält `type` som ska ha värdet `module`.
   4. Gå in i filen `diycrypto.js`. Skriv `export` framför funktionsnamet.
   5. Gå in i `main.js`. Ta bort allt innehåll. Skriv `import { encrypt, decrypt } from "diycrypto.js"`
   6. Testa att använda funktionerna `encrypt` och `decrypt` i filen `main.js`, bekräfta att det fortfarande fungerar. Grattis i så fall!

## Fördjupning

1. Fundera på hur man kan knäcka ett caesar-shiffer. Kan du skriva en funktion som kan hjälpa dig med det? Kan du komma på flera olika sätt att göra detta?

Vad finns bakom `GJSNHJYTJFHMTYMJWFSIYMJUQFSJYUQJFXJ`? :)

<br>
<details>
<summary>Ett förslag</summary>

Kolla färdigt på [klippet](https://www.youtube.com/watch?v=sMOZf4GN3oc). Svagheter tas upp i andra delen.

Skriv en funktion som klarar av att räkna ut de vanligaste tecknen i en text. Använd den på en stor engelsk artikel för att få fram lite statistik om vad som är vanligaste bokstäverna i engelska. Använd samma funktion för analysera det krypterade meddelandet som du inte vet lösningen på.
</details>


<br>
<details>
<summary>Ett annat förslag</summary>

Brute-forcea (googla på vad det betyder om du inte vet). Gör en loop som testar massor av nycklar (shifts). Skriv ut i en lista.
</details>
<br>
2. Importera funktionerna `import { readFileSync, writeFileSync } from 'fs'` i main.js. Använd de `const text = readFileSync(fileName, { encoding: 'utf8' })` för att läsa in ett meddelande från en textfil istället. Och spara till en ny fil.

3. Kolla upp vad one-time pads är för något. Det är ett mycket säkert sätt att kryptera ett meddelande, men det har en nackdel, vad? Försök att implementera kryptering med one-time-pad!

4. Refaktorisera `diycrypto.js` så att den inte använder for-loopar, utan istället använder `map`.

<details>
<summary>Lösning</summary>

````javascript
export const encrypt = (msg, shift) => msg
    .split()
    .map(ch => ch.codePointAt(0))
    .map(x => x + shift)
    .map(x => String.fromCodePoint(x))
    .join('')
````
</details>
<br>
5. Kolla upp hur man använder JsDocs i VSCode. Lägg till JsDocs-kommentarer till dina funktioner i `diycrypto.js` med korrekta typer på parametrarna, så att du får bättre intellisense när du importerar funktionerna.

6. Utforska de inbyggda krypteringsbiblioteken i [nodejs officiella krypto-bibliotek](https://nodejs.org/docs/latest-v14.x/api/crypto.html).

7. Gör vad du vill.
