{

     const RevarceName =(value:string):string => {
        const name = value.split("")
        const reverce = name.reverse()
        const name2 = reverce.join("")
        return name2
     }
}