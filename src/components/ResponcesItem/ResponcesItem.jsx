import Button from '../../ui/Button/Button'
import './ResponcesItem.scss'

const ResponcesItem = ({ name, email, coverLetter, resume }) => {
    const handleDownload = () => {
        if (resume) {
          const fileURL = URL.createObjectURL(resume);
          const a = document.createElement('a');
          a.href = fileURL;
          a.download = resume.name; 
          a.click(); 
          URL.revokeObjectURL(fileURL); 
        } else {
          alert('No file selected');
        }
    };
    

    return (
        <div className='responces__items'>
            <div className='responces__item'>
                <div className="responces__item-title">
                    Name                
                </div>
                <div className="responces__item-text">
                    { name }
                </div>
            </div>
            <div className='responces__item'>
                <div className="responces__item-title">
                    Email                
                </div>
                <div className="responces__item-text">
                    { email }
                </div>
            </div>
            <div className='responces__item'>
                <div className="responces__item-title">
                    Cover Letter                
            </div>
                <div className="responces__item-text">
                    { coverLetter }
                </div>
            </div>
            <div className='responces__item'>
                <div className="responces__item-title">
                    Resume                
                </div>
                <div className="responces__item-button">
                    <Button 
                        text='Download'
                        onClick={handleDownload}
                    />
                </div>
            </div>
        </div>
  )
}

export default ResponcesItem