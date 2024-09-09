document.addEventListener('DOMContentLoaded', function () {
    const totaalBedragElement = document.getElementById('totaalBedrag');
    totaalBedragElement.style.display = 'none'; // Verberg standaard het totaalbedrag

    document.getElementById('bereken').addEventListener('click', function () {
        const vastTarief = 215; // Jaarlijks vast tarief afvalstoffenheffing
        let kosten = vastTarief; // Start met het vaste tarief

        // Haal de waarde op van de gekozen afvalcontainer optie
        const keuze = document.querySelector('input[name="afvalType"]:checked').value;

        // Haal het aantal ledigingen en inworpen op
        const aantalLedigingenInput = document.getElementById('aantalLedigingen');
        const aantalLedigingen = parseInt(aantalLedigingenInput.value, 10);

        const aantalInworpenInput = document.getElementById('aantalInworpen');
        const aantalInworpen = parseInt(aantalInworpenInput.value, 10);

        const variabelTariefLedigingen = 9.60; // Kosten per lediging van de persoonlijke container
        const variabelTariefInworpen = 2.40; // Kosten per inworp bij de ondergrondse container

        // Controleer of een van de invoervelden een geldig aantal bevat
        if ((isNaN(aantalLedigingen) || aantalLedigingenInput.value.trim() === "") &&
            (isNaN(aantalInworpen) || aantalInworpenInput.value.trim() === "")) {
            totaalBedragElement.textContent = "Vul alstublieft een geldig aantal in voor ledigingen of inworpen.";
            totaalBedragElement.classList.add('error-message');
            totaalBedragElement.style.display = 'block'; // Toon foutmelding
            return; // Stop de verdere uitvoering van het script
        }

        // Verwijder foutmelding als het aantal geldig is
        totaalBedragElement.classList.remove('error-message');

        // Bereken de kosten op basis van de keuze van de gebruiker
        if (keuze === 'persoonlijk' && !isNaN(aantalLedigingen)) {
            kosten += aantalLedigingen * variabelTariefLedigingen;
        } else if (keuze === 'ondergronds' && !isNaN(aantalInworpen)) {
            kosten += aantalInworpen * variabelTariefInworpen;
        } else if (keuze === 'persoonlijk-ondergronds') {
            // Bereken kosten voor zowel ledigingen als inworpen als beide velden zijn ingevuld
            if (!isNaN(aantalLedigingen)) {
                kosten += aantalLedigingen * variabelTariefLedigingen;
            }
            if (!isNaN(aantalInworpen)) {
                kosten += aantalInworpen * variabelTariefInworpen;
            }
        }

        // Toon het totaalbedrag
        totaalBedragElement.textContent = "Totaalbedrag: €" + kosten.toFixed(2);
        totaalBedragElement.style.display = 'block'; // Toon totaalbedrag
    });
});
