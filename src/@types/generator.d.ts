interface IGeneratorContextProps{
    public_id:string;
    setPublic_id:React.Dispatch<React.SetStateAction<IGeneratorContextProps["public_id"]>>
    model:string
    setModel:React.Dispatch<React.SetStateAction<IGeneratorContextProps["model"]>>
    provider:string
    setProvider:React.Dispatch<React.SetStateAction<IGeneratorContextProps["provider"]>>
    color:string
    setColor:React.Dispatch<React.SetStateAction<IGeneratorContextProps["color"]>>
    message:string
    setMessage:React.Dispatch<React.SetStateAction<IGeneratorContextProps["message"]>>
    title:string
    setTitle:React.Dispatch<React.SetStateAction<IGeneratorContextProps["title"]>>

}

interface IGeneratorProviderProps{
    children:React.ReactNode
}

interface IGeneratorProps{
}
