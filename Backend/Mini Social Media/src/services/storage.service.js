const ImageKit = require("imagekit");
const { v4: uuid } = require('uuid')

const imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_IMAGEKIT,
    privateKey : process.env.PRIVATE_IMAGEKIT,
    urlEndpoint : process.env.IMAGEKIT_URL_ENPOIT
});


async function FileUpload(fileUrl, fileName) {
    return await imagekit.upload({
        file: fileUrl,
        fileName: fileName,
        folder: "Mini-Social-Media"
    })
}

module.exports = FileUpload