export function ExperienceBar() {
    return(
        <header className="experience-bar">
            <span>8 xp</span>
            <div>
                <div style={{ width:"50%"}}>
                    <span className="curent-experience" style={{ left: "50%" }}>
                        300 xp
                    </span>
                </div>
            </div>
            <span>600 xp</span>
        </header>
    );
}