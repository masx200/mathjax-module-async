export function createObjectURLjavascript(body: BlobPart) {
    return URL.createObjectURL(
        new Blob([body], { type: "application/javascript" })
    );
}
