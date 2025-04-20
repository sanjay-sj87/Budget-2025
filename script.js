document.addEventListener('DOMContentLoaded', function() {
    // Fiscal Deficit Chart
    const fiscalDeficitCtx = document.getElementById('fiscalDeficitChart');
    if (fiscalDeficitCtx) {
        new Chart(fiscalDeficitCtx, {
            type: 'bar', // Or 'line'
            data: {
                labels: ['2024-25 (RE)', '2025-26 (BE)'],
                datasets: [{
                    label: 'Fiscal Deficit (% of GDP)',
                    data: [4.8, 4.4], // Data extracted from the budget text
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(54, 162, 235, 0.6)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false, // Since values are above 0
                         title: {
                             display: true,
                             text: '% of GDP'
                         }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Financial Year'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Fiscal Deficit Trend'
                    },
                    tooltip: {
                         callbacks: {
                             label: function(context) {
                                 let label = context.dataset.label || '';
                                 if (label) {
                                     label += ': ';
                                 }
                                 label += context.raw + '%';
                                 return label;
                             }
                         }
                    }
                }
            }
        });
    }

     // Income Tax Slabs Chart (Simplified)
     const incomeTaxSlabsCtx = document.getElementById('incomeTaxSlabsChart');
     if (incomeTaxSlabsCtx) {
         new Chart(incomeTaxSlabsCtx, {
             type: 'bar', // Bar chart is good for comparing categories
             data: {
                 labels: ['0-4 Lakh', '4-8 Lakh', '8-12 Lakh', '12-16 Lakh', '16-20 Lakh', '20-24 Lakh', 'Above 24 Lakh'],
                 datasets: [{
                     label: 'Tax Rate (%)',
                     data: [0, 5, 10, 15, 20, 25, 30], // Data extracted from the budget text
                     backgroundColor: 'rgba(153, 102, 255, 0.6)',
                     borderColor: 'rgba(153, 102, 255, 1)',
                     borderWidth: 1
                 }]
             },
             options: {
                 responsive: true,
                 scales: {
                     y: {
                         beginAtZero: true,
                         title: {
                             display: true,
                             text: 'Tax Rate (%)'
                         }
                     },
                     x: {
                         title: {
                             display: true,
                             text: 'Annual Income Slab'
                         }
                     }
                 },
                 plugins: {
                     title: {
                         display: true,
                         text: 'New Income Tax Regime - Tax Slabs and Rates (Simplified)'
                     },
                     tooltip: {
                          callbacks: {
                              label: function(context) {
                                  let label = context.dataset.label || '';
                                  if (label) {
                                      label += ': ';
                                  }
                                  label += context.raw + '%';
                                  return label;
                              }
                          }
                     }
                 }
             }
         });
     }

     // Placeholder for Receipts and Expenditure Chart (Example Structure)
     const receiptsExpenditureCtx = document.getElementById('receiptsExpenditureChart');
     if (receiptsExpenditureCtx) {
         // You would fetch or define your data here for receipts and expenditure
         // For this example, using placeholder data based on the text
         const years = ['2025-26 (BE)'];
         const receipts = [34.96]; // in Lakh Crore
         const expenditure = [50.65]; // in Lakh Crore

         new Chart(receiptsExpenditureCtx, {
             type: 'bar', // Or 'line'
             data: {
                 labels: years,
                 datasets: [
                     {
                         label: 'Total Receipts (Excluding Borrowings) (₹ Lakh Crore)',
                         data: receipts,
                         backgroundColor: 'rgba(54, 162, 235, 0.6)',
                         borderColor: 'rgba(54, 162, 235, 1)',
                         borderWidth: 1
                     },
                     {
                         label: 'Total Expenditure (₹ Lakh Crore)',
                         data: expenditure,
                         backgroundColor: 'rgba(255, 99, 132, 0.6)',
                         borderColor: 'rgba(255, 99, 132, 1)',
                         borderWidth: 1
                     }
                 ]
             },
             options: {
                 responsive: true,
                 scales: {
                     y: {
                         beginAtZero: true,
                          title: {
                              display: true,
                              text: 'Amount (₹ Lakh Crore)'
                          }
                     },
                      x: {
                         title: {
                             display: true,
                             text: 'Financial Year'
                         }
                     }
                 },
                 plugins: {
                     title: {
                         display: true,
                         text: 'Total Receipts vs. Total Expenditure (2025-26 BE)'
                     },
                      tooltip: {
                           callbacks: {
                               label: function(context) {
                                   let label = context.dataset.label || '';
                                   if (label) {
                                       label += ': ';
                                   }
                                   label += '₹' + context.raw + ' Lakh Crore';
                                   return label;
                               }
                           }
                       }
                 }
             }
         });
     }

    // Add more chart initialization code here for other sections
    // You'll need to get the canvas element by its ID and create a new Chart instance
});