export default function Phones({phones}){
    const {name, id, phone}=phones
    // console.log(phones);
return (
    <div style={{
        border:'2px solid gray',
        padding:'15px',
        marginBottom:'30px'
    }}>
        <h3>Name: {name}</h3>
        <p>Email: {id}</p>
        <p>phone: {phone}</p>
        
    </div>
)
}