export default function orderByProps(obj) {
    const {special} = obj
    for (let i = 0; i < special.length; i++) {
        for (const description in special[i]) {
            if (!special[i].description) {
                special[i].description = 'Описание недоступно';
            }
        }
    }
    //console.log(special);
    return special;



    
}

//console.log(obj)