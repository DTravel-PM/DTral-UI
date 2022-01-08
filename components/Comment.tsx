export const Comment = (e: any) => {
    return (
        <div className="d-flex align-items-center" style={{padding: 10}}>
            <img
                className="rounded-circle"
                width="40"
                src="https://picsum.photos/50/50"
                alt=""
            />
            <div className="mx-2">
                <div className="" style={{fontSize:13, fontWeight: 'bold'}}>{e.name}</div>
                <div className="">{e.comment}</div>
            </div>  
        </div>
    )
}