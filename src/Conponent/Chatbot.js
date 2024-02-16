import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey There!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'Please write your username',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: "hi {previousValue}, how can I help you?",
        trigger: '4',
    },
    {
        id: '4',
        options: [
            { value: 'services', label: 'Services' },
            { value: 'blogs', label: 'Blogs' },
        ],
        trigger: '5',
    },
    {
        id: '5',
        user: true,
        trigger: '6',
    },
    {
        id: '6',
        message: 'Here are some links:',
        end: false,
    },
];

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial, sans-serif',
    headerBgColor: '#F4A460',
    headerFontColor: 'white',
    headerFontSize: '15px',
    botBubbleColor: '#F4A460',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

// Set some properties of the bot
const config = {
    floating: true,
};

function Simplechatbot() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="FWTBot"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Simplechatbot;
