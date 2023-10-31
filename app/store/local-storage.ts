
let AUTH_KEY:string = "@MY-APP-KEY";   
const LocalStorage = {
    get: () => new Promise(async (resolve,reject)=>{
        try{
            const value = await LocalStorage.get(AUTH_KEY);
            if (value !== null){
                resolve(JSON.parse( value ));
                console.log('Getting Local Storage Data: success');
            }else{
                reject('Your Data is null');
            }
        }catch(e){
            reject(e);
            console.log('localStorage.get Error: '+e);
        }
    }),
    set: async (data:any)=>{
        try {
            await localStorage.setItem(AUTH_KEY, JSON.stringify( data ) )
            console.log('Setting Local Storage Data: Success');
        } catch (e) {
            console.log('Setting Local Storage Data: '+e);
        }
    },
    clear: async ()=>{
        try {
            await LocalStorage.clear(AUTH_KEY)
            console.log('Clear Local Storage Data: success');
        } catch (e) {
            console.log('Clear Local Storage Data: '+e);
        }
    }
}
export default LocalStorage;