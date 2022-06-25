export default function orderByProps(obj, arr) {
    const {name, level, ...rest} = obj

    class Sort {
        constructor (name, level) {
            this.name = name
            this.level = level
        }
    }
    
    const sort = new Sort(obj[arr[0]], obj[arr[1]])
    const ordered = {};
    Object.keys(rest).sort().forEach(function(key) {
        ordered[key] = rest[key];
    });

    const objectAssign = Object.assign(sort, ordered);
    const objecResult = []
    for (let key in objectAssign) {
        objecResult.push(
            {key: key, value: objectAssign[key]}, // порядок взят из массива с ключами
        )
    }

    return objecResult;



    
}

//console.log(obj)