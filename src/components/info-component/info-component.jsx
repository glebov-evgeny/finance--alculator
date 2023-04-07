function InfoComponent() {
    return (
        <>
            <div className="layer__top">
                <p className="layer__price">Информация</p>
            </div>
            <div className="layer__block">
                <div className="layer__main">
                    <p className="layer__block-info">Использовано:</p><br/>
                    <p className="layer__block-info _normal">GoogleFirebase - бекенд</p>
                    <p className="layer__block-info _normal">GitHub Pages - деплой</p>
                </div>
            </div>
        </>
    );
}

export { InfoComponent };