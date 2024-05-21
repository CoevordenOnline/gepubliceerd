document.addEventListener('DOMContentLoaded', function () {
    const totaalBedragElement = document.getElementById('totaalBedrag');
    totaalBedragElement.style.display = 'none'; // Verberg standaard het totaalbedrag

    document.getElementById('bereken').addEventListener('click', function () {
        const vastTarief = 120; // Jaarlijks vast tarief afvalstoffenheffing
        let kosten = vastTarief; // Start met het vaste tarief

        const keuze = document.querySelector('input[name="afvalType"]:checked').value;
        const aantalInput = document.getElementById('aantal');
        const aantal = parseInt(aantalInput.value, 10);

        const variabelTariefLedigingen = 10; // Kosten per lediging van de persoonlijke container
        const variabelTariefInworpen = 2; // Kosten per inworp bij de ondergrondse container

        // Controleer of het invulveld leeg is
        if (isNaN(aantal) || aantalInput.value.trim() === "") {
            totaalBedragElement.textContent = "Vul alstublieft een geldig aantal in.";
            totaalBedragElement.classList.add('error-message');
            totaalBedragElement.style.display = 'block'; // Toon foutmelding
            return; // Stop de verdere uitvoering van het script
        }

        // Verwijder foutmelding als het aantal geldig is
        totaalBedragElement.classList.remove('error-message');

        if (keuze === 'persoonlijk') {
            kosten += aantal * variabelTariefLedigingen;
        } else if (keuze === 'ondergronds') {
            kosten += aantal * variabelTariefInworpen;
        }

        totaalBedragElement.textContent = "Totaalbedrag: €" + kosten;
        totaalBedragElement.classList.remove('error-message'); // Zorg ervoor dat foutmelding stijl wordt verwijderd
        totaalBedragElement.style.display = 'block'; // Toon totaalbedrag
    });
});
