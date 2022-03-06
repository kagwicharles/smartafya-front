import $ from 'jquery'


const timeoutViews = () => {
    $('.loader').hide();
    $('#diagnosisResults').fadeIn(600);
}

export function performDiagnosis(file) {
    const formData = new FormData();
    formData.append('file', file);
    console.log('Sending to server...', formData.get('file'));
    $('.loader').show();
    const message = document.getElementById('diagnosisResults');

    fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then((result) => {
            message.style.color = '#EBF9F1';
            const diagnosis = result.results;
            var diagnosisMsg = `This is a ${diagnosis} case`;
            message.innerHTML = diagnosisMsg;
            if (diagnosis === 'Normal') {
                message.style.color = '#00AB55';
                console.log('Success:', result);
            } else if (diagnosis === 'Infected') {
                message.style.color = 'red';
            } else {
                diagnosisMsg = `${diagnosis}`
                message.style.color = 'red'
            }
            message.innerHTML = diagnosisMsg;
            setTimeout(timeoutViews, 2000)
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
