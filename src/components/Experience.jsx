<template>
    <section id="experience" class="bg-[#060312] text-gray-400 py-20 flex flex-col items-center">
        <div class="max-w-[900px] w-full">
            <SectionTitle icon={<Briefcase />} title="Experience" />
        </div>

        <div class="max-w-[900px] w-full grid md:grid-cols-2 gap-8">
            <div>
                <div class="mb-8">
                    <h3 class="text-2xl font-bold">Frontend Developer</h3>
                    <p class="text-gray-500">Google</p>
                    <p class="text-gray-500">2020 - Present</p>
                </div>

                <div class="mb-8">
                    <h3 class="text-2xl font-bold">Backend Developer</h3>
                    <p class="text-gray-500">Facebook</p>
                    <p class="text-gray-500">2018 - 2020</p>
                </div>
            </div>
            <div>
                <div class="mb-8">
                    <h3 class="text-2xl font-bold">Full Stack Developer</h3>
                    <p class="text-gray-500">Amazon</p>
                    <p class="text-gray-500">2016 - 2018</p>
                </div>

                <div class="mb-8">
                    <h3 class="text-2xl font-bold">Software Engineer</h3>
                    <p class="text-gray-500">Microsoft</p>
                    <p class="text-gray-500">2014 - 2016</p>
                </div>
            </div>
        </div>
    </section>
</template>