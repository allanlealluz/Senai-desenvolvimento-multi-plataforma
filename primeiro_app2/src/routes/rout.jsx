export default function Root(){
    return (
        <div id="sidebar">
            <div id="sidebar-content">
                <div id="sidebar-header">
                    <h1>Allone</h1>
                    <h2>My Sidebar</h2>
                    
                    <div id="sidebar-actions">
                        <a href="#" class="sidebar-close"><i class="fas fa-times"></i>aa</a>
                        <a href="#" class="sidebar-toggle"><i class="fas fa-bars"></i>aa</a>                    
                    </div>
                </div>
            </div>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name"></input>
                </div>
            </form>
            
            <div class="sidebar-footer">
                <a href="https://github.com/brunocarvalho92" target="_blank"><i class="fab fa-github"></i>aa</a>
                <a href="https://www.linkedin.com/in/brunocarvalho92/" target="_blank"><i class="fab fa-linkedin"></i>aa</a>
            </div>
        </div>
    )
}