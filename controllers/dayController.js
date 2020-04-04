module.exports = {
    calculate(req, res){
        //const {month, year} = req.params;
        month = 4;year=2005
        
        diaSemana(year-2000,month);
        
        res.send(req.query);
    }
}

function diaSemana(years, month){

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
                bi = 1 + Math.floor(years/4);
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

       console.log(weak[month])
}