module.exports = {
    calculate(req, res){
        const {month, year} = req.params;
        
        const start = dayWeek(month,year-2000);

        const calendar = monthCalculator(start, month, year-2000);

        const html = htmlContructor(calendar);
        
        res.send(html);
    }
}

function dayWeek(month,years){

        /*
        0-domingo
        1-segunda
        2-terca
        3-quarta
        4-quinta
        5-sexta
        6-sabado
        */
        let weak = [6,2,3,6,1,4,6,2,5,0,3,5];
        let bi = 0;

        if(month<=2){ 
            if(years !== 0){
                if(years %4 ===0){
                    bi =  Math.floor(years/4);
                } else{
                    bi = 1 + Math.floor(years/4);
                }
            }
            month--;

            for(i = years; i > 0; i--){
                if(weak[month] === 6){
                    weak[month] = 0;
                } else{
                    weak[month]++
                }
            }

            for(i = bi; i > 0; i--){
                if(weak[month] === 6){
                    weak[month] = 0;
                } else{
                    weak[month]++
                }
            }   
        } else{
            bi = 0;
            month--;

            if(years !== 0){
                bi = Math.floor(years/4);
            }

            for(i = years; i > 0; i--){
                if(weak[month] === 6){
                    weak[month] = 0;
                } else{
                    weak[month]++
                }
            }

            for(i = bi; i > 0; i--){
                if(weak[month] === 6){
                    weak[month] = 0;
                } else{
                    weak[month]++
                }
            }
        }

       return(weak[month]);
}

function monthCalculator(start, month, years){
    let calendar = [];
    let dayMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
    let bi = (years % 4 === 0 ? true : false);
    let day = 0;
    
    if(bi){
        dayMonths[1] = 29;
    }

    for(let l = 0;l < 6;l++){
        calendar[l] = [];
    }

    for(let l = 0;l < 6;l++){
        for(let c = 0;c <= 6;c++){
            if(c === start && l === 0){
                day++;
                calendar[l][c] = day;
            } else if(day > 0 && day < dayMonths[month-1]){
                day++;
                calendar[l][c] = day;
            } else{
                calendar[l][c] = 0;
            }
        }
    }

    return calendar;

}

function htmlContructor(calendar){
    let html = `<table>
    <thead>
        <th>Dom</th><th>Seg</th><th>Ter</th>
        <th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th>
    </thead> <tbody>`;
    
    for(let l = 0;l < 6;l++){
        html += `<tr>`;
        for(let c = 0;c <= 6;c++){
            if(calendar[l][c]!==0){
                html += `<td>${calendar[l][c]}</td>`;
            } else{
                html += '<td></td>'
            }
        }
        html += `<tr>`;
    }

    return html;
}