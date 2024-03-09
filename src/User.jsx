export default function User({user}){
    console.log(user ,'user');
    const {title, id, body}=user
    return (
        <div style={{
            border:'1px solid yellow',
            padding:'15px',
            borderRadius:'15px',
            marginBottom:'30px'
        }}>
      <h4>name: {title}</h4>
      <h4>id: {id}</h4>
      <h4>address: {body}</h4>
        </div>
    )
}