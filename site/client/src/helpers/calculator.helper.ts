export const calculateCoast = (distance, volume, weight, dangerClass)=>{

    const coastPerKm = (10+volumeCalc(volume)+weightCalc(weight)) * dangerClassCalc(dangerClass)

    return Math.round(coastPerKm*distance) 
}


const volumeCalc = (volume)=>{
    return volume/100
}

const weightCalc = (weight)=>{
    return weight/1000
}


const dangerClassCalc = (dangerClass)=>{
    if(dangerClass<5 && dangerClass!=0){
        return 1.5
    }
    if(dangerClass>=5){
        return 2
    }

    return 1


}

