const Modal = ({ isVisible ,onClose,children}) => {
    if (!isVisible) return null;
    const handleClose=(e)=>{
        if(e.target.id==='wrapper') onClose();
    }
    return (
        <div id="wrapper" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25  modal backdrop-blur-sm" onClick={handleClose}>
            <div className="w-[600px] flex flex-col">
                <button className="text-xl text-white place-self-end" onClick={()=>onClose()}>X</button>
                <div className="p-2 bg-white rounded">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Modal