const likeCode = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Liked the post successfully");
            } else {
                reject("Failed to like the post");
            }
        }, 5000);
    });
};

const commentCode = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Commented on the post successfully");
            } else {
                reject("Failed to comment on the post");
            }
        }, 5000);
    });
};

const shareCode = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Shared the post successfully");
            } else {
                reject("Failed to share the post");
            }
        }, 5000);
    });
};

const postCode = async () => {
    const post = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Post created successfully");
            } else {
                reject("Failed to create the post");
            }
        }, 5000);
    });

    try {
        const [pos, like, comment, share] = await Promise.all([post,likeCode(),commentCode(),shareCode()]);
        console.log(pos);
        console.log(like);
        console.log(comment);
        console.log(share);
    } catch (error) {
        console.error(error);
    }
};

postCode();