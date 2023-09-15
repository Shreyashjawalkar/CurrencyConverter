<!DOCTYPE html>
<html>
<head>
    <title>Currency Converter</title>
</head>
<body>
    <h1>Currency Converter</h1>
    
    <label for="fromCurrency">From:</label>
    <select id="fromCurrency">
    </select>
    
    <label for="toCurrency">To:</label>
    <select id="toCurrency">
    </select>
    
    <label for="amount">Amount:</label>
    <input type="number" id="amount" placeholder="Enter amount">
    
    <button id="convertButton">Convert</button>
    
    <div id="result">
        <!-- Display the converted currency value here -->
    </div>
    
    <script src="renderer.js"></script>
</body>
</html>