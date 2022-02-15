import React from "react";

function PostLoading(Component) {
    return function PostLoadingComponent({ isLoading, ...props}) {
        
        return (
            <p style={{ fontSize: '25px' }}>
                Waiting for data to load!...
            </p>
        )
    };
}
export default PostLoading;