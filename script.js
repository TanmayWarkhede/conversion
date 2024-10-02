document.getElementById('speak-button').addEventListener('click', function () {
    const textInput = document.getElementById('text-input').value;
    const language = 'en'; // Change to your desired language code if needed

    if (textInput.trim() === '') {
        alert('Please enter some text to convert.');
        return;
    }

    // Construct the URL for the ResponsiveVoice API
    const url = `https://code.responsivevoice.org/getvoice.php?t=${encodeURIComponent(textInput)}&tl=${language}&sv=English&vn=ResponsiveVoice`;

    // Create an audio element and play the voice
    const audio = new Audio(url);
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
        alert('Failed to play audio. Please try again.');
    });
});
