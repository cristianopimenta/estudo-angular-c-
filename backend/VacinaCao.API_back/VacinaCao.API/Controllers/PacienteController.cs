using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VacinaCao.API.Data;
using VacinaCao.API.Models;

namespace VacinaCao.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class PacienteController : ControllerBase
    {

        private readonly VacinaCaoContext _paciente;

        public PacienteController(VacinaCaoContext context)
        {
            _paciente = context;
        }


        [HttpGet]
        [Route("/Pacientes")]
        public async Task<ActionResult> GetPaciente()
        {
            return Ok(await _paciente.Pacientes.ToListAsync());
        }

        [HttpPost]
        [Route("/Pacientes")]
        public async Task<ActionResult> CreatePacientes(Pacientes pacientes)
        {
            await _paciente.Pacientes.AddAsync(pacientes);
            await _paciente.SaveChangesAsync();
            return Ok(pacientes);
        }

        [HttpPut]
        [Route("/Paciente")]
        public async Task<ActionResult> UpdatePacientes(Pacientes paciente)
        {
            var dbPacientes = await _paciente.Pacientes.FindAsync(paciente.PacId);
            if (dbPacientes == null)
                return NotFound();

            dbPacientes.Nome = paciente.Nome;
            dbPacientes.Raca = paciente.Raca;
            dbPacientes.Peso = paciente.Peso;
            dbPacientes.Especie = paciente.Especie;
            dbPacientes.Data_Nascimento = paciente.Data_Nascimento;
            dbPacientes.Sexo = paciente.Sexo;

            await _paciente.SaveChangesAsync();
            return Ok(new
            {
                data = paciente,
                success = true,
                message = "Alterado com Sucesso"

            });
        }
        [HttpDelete]
        [Route("/Paciente")]
        public async Task<ActionResult> UpdatePacientes(Guid PacId)
        {
            var dbPacientes = await _paciente.Pacientes.FindAsync(PacId);

            if (dbPacientes == null)
                return NotFound();

            _paciente.Pacientes.Remove(dbPacientes);

            await _paciente.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                message = "Deletado com Sucesso"

            });

        }


    }
}