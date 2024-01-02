window.onload = function() 
{
      var ctx = document.getElementById("myChart").getContext("2d");
  
      var data = [
          {
              "day": "mon",
              "amount": 17.45
          },
          {
              "day": "tue",
              "amount": 34.91
          },
          {
              "day": "wed",
              "amount": 52.36
          },
          {
              "day": "thu",
              "amount": 31.07
          },
          {
              "day": "fri",
              "amount": 23.39
          },
          {
              "day": "sat",
              "amount": 43.28
          },
          {
              "day": "sun",
              "amount": 25.48
          }
      ];
  
      var labels = data.map(function(item) 
      {
          return item.day;
      });
  
      var amounts = data.map(function(item)
      {
          return item.amount;
      });
  
      var myChart = new Chart(ctx,
      {
          type: 'bar',
          data: 
            {
                  labels: labels,
                  datasets: 
                  [{
                        label: 'Spending',
                        data: amounts,
                        backgroundColor: '#EB745C',
                        borderColor: '#EB745C',
                        borderWidth: 1,
                  }]
            },
          options: 
            {
              scales: 
              {
                  y: 
                  {
                      beginAtZero: true
                  }
              }
            }
      });
  }