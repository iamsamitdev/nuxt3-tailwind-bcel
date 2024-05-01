export default function (): string {

    const colors = 
    [
        'red', 
        'green', 
        'blue', 
        'yellow', 
        'purple', 
        'pink', 
        'indigo', 
        'cyan', 
        'teal', 
        'gray',
        'orange',
        'lime',
    ]

    return colors[Math.floor(Math.random() * colors.length)]

}