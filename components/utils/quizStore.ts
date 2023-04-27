export const getQuizes = () => {
    const storage = localStorage.getItem("quizes")
    if (storage) {
        return JSON.parse(storage) as Quiz[];
    }
    return [] as Quiz[];
}

export const setQuizes = (v: Quiz[]) => {
    localStorage.setItem("quizes", JSON.stringify(v));
}

export const createQuiz = () => {
    const quizes = getQuizes();
    const id = quizes.reduce((maxId, v) => maxId > v.id ? maxId : v.id, 1) + 1;
    quizes.push({
        id: id,
        title: `Квиз ${id}`,
        description: "",
        questions: [],
    });

    setQuizes(quizes);
    return id;
}

export const getMaxId = () => {
    const quizes = getQuizes();
    const id = quizes.reduce((maxId, v) => maxId > v.id ? maxId : v.id, 1);
    return id;
}