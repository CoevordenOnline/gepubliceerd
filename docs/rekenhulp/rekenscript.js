        document.addEventListener('DOMContentLoaded', function () {
            const totaalBedragElement = document.getElementById('totaalBedrag');
            totaalBedragElement.style.display = 'none'; // Verberg standaard het totaalbedrag

            document.getElementById('bereken').addEventListener('click', function () {
                const vastTarief = 215; // Jaarlijks vast tarief afvalstoffenheffing
                let kosten = vastTarief; // Start met het vaste tarief

                const aantalLedigingenInput = document.getElementById('aantalLedigingen');
                const aantalLedigingen = parseInt(aantalLedigingenInput.value, 10);

                const aantalInworpenInput = document.getElementById('aantalInworpen');
                const aantalInworpen = parseInt(aantalInworpenInput.value, 10);

                const variabelTariefLedigingen = 9.60; // Kosten per lediging van de persoonlijke container
                const variabelTariefInworpen = 2.40; // Kosten per inworp bij de ondergrondse container

                // Controleer of een van de invoervelden leeg of ongeldig is
                if ((isNaN(aantalLedigingen) || aantalLedigingenInput.value.trim() === "") &&
                    (isNaN(aantalInworpen) || aantalInworpenInput.value.trim() === "")) {
                    totaalBedragElement.textContent = "Vul alstublieft een geldig aantal in voor ledigingen of inworpen.";
                    totaalBedragElement.classList.add('error-message');
                    totaalBedragElement.style.display = 'block'; // Toon foutmelding
                    return; // Stop de verdere uitvoering van het script
                }

                // Verwijder foutmelding als het aantal geldig is
                totaalBedragElement.classList.remove('error-message');

                // Bereken kosten voor ledigingen
                if (!isNaN(aantalLedigingen) && aantalLedigingen > 0) {
                    kosten += aantalLedigingen * variabelTariefLedigingen;
                }

                // Bereken kosten voor inworpen
                if (!isNaN(aantalInworpen) && aantalInworpen > 0) {
                    kosten += aantalInworpen * variabelTariefInworpen;
                }

                totaalBedragElement.textContent = "Totaalbedrag: €" + kosten.toFixed(2);
                totaalBedragElement.style.display = 'block'; // Toon totaalbedrag
            });
        });
