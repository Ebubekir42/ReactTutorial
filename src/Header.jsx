import "./MyStylesheet.css"
// Styling React Using CSS
// - Inline styling
// - CSS stylesheets
// - CSS Modules

// Inline Styling
const myStyle = {
    fontSize: "1.5rem",
    color: "white"
};

const Header = () => {
    return (
        <header style={{
            background: '#007bff',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
            marginBottom: '20px'
        }}>
            <h1 className="primary" style={{ fontSize: "2rem" }}>My Website</h1>
            <h2 style={myStyle}>My Website 2</h2>
            <nav style={{ marginTop: '10px' }}>
                <a href="#" style={{ color: 'white', marginRight: '20px' }}>Home</a>
                <a href="#" style={{ color: 'white', marginRight: '20px' }}>About</a>
                <a href="#" style={{ color: 'white' }}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
