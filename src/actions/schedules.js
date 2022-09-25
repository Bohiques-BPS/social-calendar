
export const setSchedule = async (data) => {
    try{
        localStorage.setItem('schedules', JSON.stringify( data ) )
        return true;
    }catch( error ){
        console.log( error )
        return false
    }
    
}

export const getSchedule = async () => {
    try{
        const data = JSON.parse( localStorage.getItem('schedules') ) || (new Array(12).fill([]))
        //console.log( data )
        return data
    }catch( error ){
        console.log( error )
        return (new Array(12).fill([]))
    }
}

