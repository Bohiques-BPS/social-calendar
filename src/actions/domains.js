
export const setDomains = async (domains) => {
    try{
        localStorage.setItem('domains', JSON.stringify( domains ) )
        return true;
    }catch( error ){
        console.log( error )
        return false
    }
    
}

export const getDomains = async () => {
    try{
        const domains = JSON.parse( localStorage.getItem('domains') ) || []
        return domains
    }catch( error ){
        console.log( error )
        return ([])
    }
}

