using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VacinaCao.API.Data;
using VacinaCao.API.Models;

namespace VacinaCao.API.Controllers
{
    
        [Route("api/[controller]")]
        [ApiController]

    public class TutorController : ControllerBase
    {
        private readonly VacinaCaoContext _tutor;


            public TutorController(VacinaCaoContext context)
            {
                _tutor = context;
            }

            [HttpGet]
            [Route("/Tutores")]
            public async Task<ActionResult> Gettutor()
            {
                return Ok(await _tutor.Tutores.ToListAsync());
            }

            [HttpPost]
            [Route("/Tutores")]
            public async Task<ActionResult> CreateTutores(Tutores Tutores)
            {
                await _tutor.Tutores.AddAsync(Tutores);
                await _tutor.SaveChangesAsync();
                return Ok(Tutores);
            }

            [HttpPut]
            [Route("/Tutores")]
            public async Task<ActionResult> UpdateTutores(Tutores tutor)
            {
                var dbTutores = await _tutor.Tutores.FindAsync(tutor.TutorId);
                if (dbTutores == null)
                    return NotFound();

                
                dbTutores.CPF = tutor.CPF;
                dbTutores.Cidade = tutor.Cidade;
                dbTutores.Rua = tutor.Rua;
                dbTutores.Numero = tutor.Numero;
                

                await _tutor.SaveChangesAsync();
                return Ok(new
                {
                    data = tutor,
                    success = true,
                    message = "Alterado com Sucesso"

                });
            }
            [HttpDelete]
            [Route("/Tutores")]
            public async Task<ActionResult> UpdateTutores(Guid PacId)
            {
                var dbTutores = await _tutor.Tutores.FindAsync(PacId);

                if (dbTutores == null)
                    return NotFound();

                _tutor.Tutores.Remove(dbTutores);

                await _tutor.SaveChangesAsync();

                return Ok(new
                {
                    success = true,
                    message = "Deletado com Sucesso"

                });

            }


        }
    }
