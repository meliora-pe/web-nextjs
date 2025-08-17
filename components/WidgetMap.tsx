import React from 'react';

const WidgetMap = ({ src }: { src: string }) => {
    return (
        <div className="h-full w-full">
            <iframe id="google-maps" src={src} width="100%" height="100%" border-radius="16px"></iframe>
        </div>
    );
};

export default WidgetMap;
