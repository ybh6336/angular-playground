function exportToPDF() {
    var pdf = new jsPDF('p','pt','a4');

    pdf.addHTML(document.body, function() {
        pdf.save('testPDF.pdf');
    });
}
