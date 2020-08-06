export default function convertHourToMinutes(time: string){
    //8:00

    const [hours, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hours * 60) + minutes;

    return timeInMinutes;
}