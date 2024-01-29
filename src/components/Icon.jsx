// const IconWrapper = ({children}) =>{
//     return(
//         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             {children}
//         </svg> 
//     )
// }

export const AddIcon =()=>(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m 8,0 a 1,1 0 0 1 1,1 v 6 h 6 a 1,1 0 1 1 0,2 H 9 v 6 A 1,1 0 1 1 7,15 V 9 H 1 A 1,1 0 1 1 1,7 H 7 V 1 A 1,1 0 0 1 8,0 Z"
            fill="currentColor" />
    </svg> 
);


export const TrashcanIcon =()=>(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>

);



export const Icon = {
    Add: AddIcon,
    Trashcan: TrashcanIcon
}