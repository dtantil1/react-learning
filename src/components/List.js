function List(props){
    return(
        <ol>
            {props.list.map((item)=>(
                <Item key={item.objectID} item={item} />
            ))}
        </ol>
    )
};

const Item = (props)=>(
    <li>
        <span>
            <a href={props.item.url}>{props.item.url}</a>
        </span>
        <span>{props.item.author}</span>
        <span>{props.item.num_comments}</span>
        <span>{props.item.points}</span>
    </li>
)

export default List;