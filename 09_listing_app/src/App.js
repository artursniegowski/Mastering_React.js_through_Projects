// importing css from the bulma css project
// i could also use the cdn version and append it in the html as stated in the documentation
import 'bulma/css/bulma.css'; 
import ProfileCard from "./components/ProfileCard";
// importing images to our project
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-2'>
                            <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                imageSrc={AlexaImage} 
                                content="Alexa was created by Amazon. It can help you buy things."
                            />
                        </div>
                        <div className='column is-2'>
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana32" 
                                imageSrc={CortanaImage} 
                                content="Cortana was created by Microsoft. To copy Alexa."
                            />            
                        </div>
                        <div className='column is-2'>
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri01" 
                                imageSrc={SiriImage} 
                                content="Siri was made by Apple, but it is not very popular anymore."
                            /> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;