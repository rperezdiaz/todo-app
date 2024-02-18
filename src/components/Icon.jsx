// const IconWrapper = ({children}) =>{
//     return(
//         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//             {children}
//         </svg> 
//     )
// }

export const AddIcon =()=>(
    <svg viewBox="-4 -4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const UncheckedIcon = () => (
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" fill="currentColor"/>
    </svg>
);

const CheckedIcon = () => (
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm14.664-3.247a1 1 0 0 1 .083 1.411l-5.333 6a1 1 0 0 1-1.495 0l-2.666-3a1 1 0 0 1 1.494-1.328l1.92 2.159 4.586-5.16a1 1 0 0 1 1.411-.082z" fill="currentColor"/></svg>
)

const EditIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 11 17H8a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707l9-9zM9 13.414V15h1.586l8-8L17 5.414l-8 8zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="currentColor"/>
    </svg>
)


export const Icon = {
    Add: AddIcon,
    Trashcan: TrashcanIcon,
    Unchecked: UncheckedIcon,
    Checked: CheckedIcon,
    Edit: EditIcon,
}