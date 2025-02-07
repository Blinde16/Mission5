// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateButton").click(function () {
        let hours = parseFloat($("#hours").val()); // Convert to float
        let rate = parseFloat($("#rate").val()); // Convert to float
        let totalOutput = $("#total");

        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number of hours.");
            totalOutput.val("");
            return;
        }

        let total = hours * rate;
        totalOutput.val("$" + total.toFixed(2)); // Format output with $
    });
});

