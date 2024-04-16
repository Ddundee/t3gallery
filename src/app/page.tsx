export default function HomePage() {

    const mockURLS = [
        'https://utfs.io/f/6dc888b0-6a89-429a-aa7c-8dba2fa06887-yd0xy2.JPG',
        'https://utfs.io/f/d3c03056-5ae3-4f45-972c-be8f47cf5dff-u1ttm2.png',
        'https://utfs.io/f/ac40b88d-2cad-4283-915b-11d8f759fbdd-h7t1l8.jpg',
        'https://utfs.io/f/e5569d2c-3163-43db-b769-b77943eb4007-75wx7p.png'
    ]

    const mockImages = mockURLS.map((url, index) => ({
        id: index + 1,
        url
    }))

    return (
        <main className="">
            <div className="flex flex-wrap">
                {
                    [...mockImages, ...mockImages, ...mockImages].map((image) => (
                        <div key={image.id} className="w-48">
                            <img src={image.url} />
                        </div>
                    ))
                }

            </div>
        </main>
    );
}
