export function openDB() {
    return new Promise((resolve,reject) => {
        let openRequest = indexedDB.open("Notes",1);

        openRequest.onupgradeneeded = () => {
            let db = openRequest.result;
            db.createObjectStore("Notes",{keyPath: "id", autoIncrement: true});
        };

        openRequest.onsuccess = () => {
            let db = openRequest.result;
            resolve(db);
            db.onversionchange = () => {
                console.warn("The version of IndexeDB is outdate, please realod the page")
            };
        };

        openRequest.onerror = () => reject(openRequest.error);

        openRequest.onblocked = () => console.warn("There is another tab opened, please close it");
    })
};

interface Note {
    id?: number,
    title: string,
    description: string
};

export async function addNote(note: Note) {
    let db: any = await openDB();
    let transaction = db.transaction("Notes","readwrite");
    let objectStore = transaction.objectStore("Notes");
    objectStore.add(note);

    transaction.onerror = () => console.error("Error while adding a new note"); 
};

export async function deleteNote(id: number) {
    let db: any = await openDB();
    let transaction = db.transaction("Notes","readwrite");
    let objectStore = transaction.objectStore("Notes");
    objectStore.delete(id);

    transaction.onerror = () => console.error("Error while deleting a note");
};

export async function updateNote(note: Note) {
    let db: any = await openDB();
    let transaction = db.transaction("Notes","readwrite");
    let objectStore = transaction.objectStore("Notes");
    objectStore.put(note);

    transaction.onerror = () => console.log("Error while updating a note");
};

export function getNotes() {
    return new Promise(async (resolve,reject) => {
        let db: any = await openDB();
        let transaction = db.transaction("Notes","readonly");
        let objectStore = transaction.objectStore('Notes');
        let request = objectStore.getAll();

        request.onsuccess = () => resolve(request.result);
        transaction.onerror = () => reject(new Error("Error while getting the notes from IndexedDB"))
    })
};