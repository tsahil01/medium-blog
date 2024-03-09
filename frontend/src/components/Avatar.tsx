export function Avatar({name, size = 6}: {name: string, size?: number}){
    let avatarName = "";
    try{
        avatarName = `${name[0]}${name.split(" ")[1][0]}`
    }
    catch(e){
        avatarName = `${name[0]}${name[1]}`;
    }
    return <>
    <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-800 rounded-full dark:bg-gray-600 p-1`}>
        <span className="font-auto text-gray-600 dark:text-gray-300">{avatarName}</span>
    </div>
    </>
};