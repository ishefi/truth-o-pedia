document.getElementById("submit").addEventListener("click", function() {
        var question = document.getElementById("question").value;
	var answer = document.getElementById("answer").value;
        var ciphered = cipher(answer);

        var url = new URL(document.URL)
	url.pathname = "/"
	url.searchParams.append("question", question)
	url.searchParams.append("ans", ciphered) 
	window.location.href = url.toString();


});
